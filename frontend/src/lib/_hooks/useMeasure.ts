import { useState, useCallback, useLayoutEffect, Ref, RefObject } from 'react';
export interface IMeasureValues extends Partial<Omit<DOMRect, 'toJSON'>> {}
export interface IUseMeasureOptions {
    effectDeps?: any[];
}
export type UseMeasureReturnType<T extends HTMLElement = HTMLDivElement> = {
    ref: Ref<T> | RefObject<T>;
    values: IMeasureValues;
    node: T | null;
};
const useMeasure = <T extends HTMLElement = HTMLDivElement>(options?: IUseMeasureOptions): UseMeasureReturnType<T> => {
    const [measure, setMeasure] = useState<IMeasureValues>({});
    const [node, setNode] = useState<T | null>(null);
    const ref = useCallback((newNode: T | null) => {
        setNode(newNode);
    }, []);
    // need ref to continue    
    const calculateMeasure = useCallback(() => {
        window.requestAnimationFrame(() => {
            node && setMeasure(node?.getBoundingClientRect());
        });
        // eslint-disable-next-line
         //react-hooks/exhaustive-deps 
           }, [node, node?.offsetHeight, node?.offsetWidth, node?.offsetLeft, node?.offsetTop]);
    useLayoutEffect(() => {
        // @ts-ignore 
               if (!node) return;
        // invoke measure right away 
               calculateMeasure();
        if ('ResizeObserver' in window) {
            const resizeObserver = new ResizeObserver(calculateMeasure);
            resizeObserver.observe(node);
            window.addEventListener('scroll', calculateMeasure);
            return () => {
                resizeObserver.unobserve(node);
                resizeObserver.disconnect();
                window.removeEventListener('scroll', calculateMeasure);
            };
        }
        (window as Window).addEventListener('resize', calculateMeasure);
        (window as Window).addEventListener('scroll', calculateMeasure);
        (window as Window).addEventListener('reset', calculateMeasure);
        return () => {
            window.removeEventListener('resize', calculateMeasure);
            window.removeEventListener('scroll', calculateMeasure);
            window.removeEventListener('reset', calculateMeasure);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
        node,
        node?.offsetHeight,
        node?.offsetWidth,
        node?.offsetLeft,
        node?.offsetTop,
        // eslint-disable-next-line react-hooks/exhaustive-deps        ...(options?.effectDeps || []),
    ]);
    return { ref, values: measure, node };
};
export default useMeasure;