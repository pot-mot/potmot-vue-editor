import {isMobile, limit} from "../common/common";

export const vDrag = {
    mounted(el: HTMLDivElement, binding: any) {
        if (isMobile()) {
            // 移动端手指触碰事件
            el.addEventListener('touchstart', (e: TouchEvent) => {
                if (e.target != el) return;
                e.preventDefault();

                const positionRange = binding.value

                console.log(positionRange)

                // 当前滑块位置
                const rectLeft = el.offsetLeft;
                const rectTop = el.offsetTop;

                const startX = e.touches[0].clientX;
                const startY = e.touches[0].clientY;

                const setXY = (e: TouchEvent) => {
                    const endX = e.touches[0].clientX;
                    const endY = e.touches[0].clientY;
                    const moveX = endX - startX + rectLeft;
                    const moveY = endY - startY + rectTop;
                    el.style.top = limit(moveY, positionRange.minX, positionRange.maxX ? positionRange.maxX - el.offsetWidth : undefined) + "px";
                    el.style.left = limit(moveX, positionRange.minX, positionRange.maxX ? positionRange.maxX - el.offsetWidth : undefined) + "px";
                }

                const removeSetXY = () => {
                    document.removeEventListener('touchmove', setXY);
                    document.removeEventListener('touchend', removeSetXY);
                }

                document.addEventListener('touchmove', setXY);
                document.addEventListener('touchend', removeSetXY);
            })
        } else {
            // 网页端鼠标事件
            el.onmousedown = (e: MouseEvent) => {
                if (e.target != el) return;
                e.preventDefault();

                const positionRange = binding.value

                // 当前滑块位置
                const rectLeft = el.offsetLeft;
                const rectTop = el.offsetTop;
                // 初始的位置
                const startX = e.clientX;
                const startY = e.clientY;

                const setXY = (e: MouseEvent) => {
                    const endX = e.clientX;
                    const endY = e.clientY;
                    const moveX = endX - startX + rectLeft;
                    const moveY = endY - startY + rectTop;

                    el.style.top = limit(moveY, positionRange.minX, positionRange.maxX ? positionRange.maxX - el.offsetWidth : undefined) + "px";
                    el.style.left = limit(moveX, positionRange.minX, positionRange.maxX ? positionRange.maxX - el.offsetWidth : undefined) + "px";
                };

                const removeSetXY = () => {
                    document.removeEventListener('mousemove', setXY);
                    document.removeEventListener('mouseup', removeSetXY);
                }

                document.addEventListener('mousemove', setXY);
                document.addEventListener('mouseup', removeSetXY);
            }
        }
    }
}
