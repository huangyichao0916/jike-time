import React,{forwardRef,useState,useEffect,useMemo,useRef,useImperativeHandle} from 'react';
import styled from 'styled-components';
import BScroll from "better-scroll"

const ScrollContainer = styled.div`
    width:100%;
    height:100vh;
    /* padding: 0 0.44rem; */
`

const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
      }, delay);
    };
};

const Scroll = forwardRef((props, ref) => {
    const [bScroll, setBScroll] = useState();

    const scrollContaninerRef = useRef();

    const { direction, refresh, bounceTop, bounceBottom } = props;

    const { pullUp, pullDown, onScroll } = props;

    let pullUpDebounce = useMemo(() => {
        return debounce(pullUp, 500)
    }, [pullUp]);

    let pullDownDebounce = useMemo(() => {
        return debounce(pullDown, 500)
    }, [pullDown]);

    //生成BScroll的useEffect
    useEffect(() => {
        const scroll = new BScroll(scrollContaninerRef.current, {
            scrollX: direction === "horizental",
            scrollY: direction === "vertical",
            probeType: 3,
            click: true,
            bounce: {
                top: bounceTop,
                bottom: bounceBottom
            }
        });
        setBScroll(scroll);
        return () => {
            setBScroll(null);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!bScroll || !onScroll) return;
        bScroll.on('scroll', onScroll)
        return () => {
            bScroll.off('scroll', onScroll);
        }
    }, [onScroll, bScroll]);

    useEffect(() => {
        if (!bScroll || !pullUp) return;
        const handlePullUp = () => {
            //判断是否滑动到了底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUpDebounce();
            }
        };
        bScroll.on('scrollEnd', handlePullUp);
        return () => {
            bScroll.off('scrollEnd', handlePullUp);
        }
    }, [pullUp, pullUpDebounce, bScroll]);

    useEffect(() => {
        if (!bScroll || !pullDown) return;
        const handlePullDown = (pos) => {
            //判断用户的下拉动作
            if (pos.y > 50) {
                pullDownDebounce();
            }
        };
        bScroll.on('touchEnd', handlePullDown);
        return () => {
            bScroll.off('touchEnd', handlePullDown);
        }
    }, [pullDown, pullDownDebounce, bScroll]);


    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh();
        }
    });

    useImperativeHandle(ref, () => ({
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        }
    }));
    return (
        <ScrollContainer ref={scrollContaninerRef}>
            {props.children}
        </ScrollContainer>
    );
})

export default Scroll;