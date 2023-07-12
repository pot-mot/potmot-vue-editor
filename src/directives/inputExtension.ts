// TODO
export const vInputExtension = {
    mounted(el: HTMLTextAreaElement | HTMLInputElement) {
        el.addEventListener("keydown", (e: Event) => {
            if (e instanceof KeyboardEvent) {
                const keyEvent = <KeyboardEvent>e
                if (keyEvent.key == 'Tab') {

                }
            }
        })
    }
}