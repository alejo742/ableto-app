// Purpose: Repository for handling animations on the website. They all work with class names and scroll events.

class AnimationsRepository {

    /**
     * Function to handle the initial setup of the document animations
     */
    static initialSetup() {
        /**
         * Function to handle the initial animation tasks when the document is loaded
         */
        function initialDocumentTasks() {
            const preloader: HTMLElement | null = document.querySelector('.preloader');
            const page: HTMLElement | null = document.querySelector('.general-wrapper');
            preloader?.classList.add('loaded');
            setTimeout(() => {
                preloader!.style.display = "none";
                page!.classList.add('loaded');
                AnimationsRepository.handleAnims();
            }, 500);
        }
    
        // document should be loaded (useEffect). For other purposes, we could check whether it is loaded or not
        setTimeout(() => {
            initialDocumentTasks();
        }, 300)
    }

    /**
     * Function to add the necessary classes to every element for animations
     */
    static setScrollAnims() {
        const scrollables: NodeListOf<HTMLElement> = document.querySelectorAll('.scrollable'); // all elements that will have on-scroll animations
        window.addEventListener('scroll', () => {
          scrollables.forEach(e => {
            if(this.isInView(e)) {
                e.classList.remove('animate-active');
                e.classList.add('animate-active');
            }
            else {
                e.classList.remove('animate-active');
            }
          })
        })
    };
  
    /**
     * Function to handle the animations of the elements. After the class names are set up in the document, this is all you need to call to make animations work
     */
    static handleAnims() {
        const textAnimate: NodeListOf<HTMLElement> = document.querySelectorAll('.text-animate');
        const fadeAnimate: NodeListOf<HTMLElement> = document.querySelectorAll('.fade-animate');
        const opacityAnimate: NodeListOf<HTMLElement> = document.querySelectorAll('.opacity-animate');

        const allAnimate = [...textAnimate, ...fadeAnimate, ...opacityAnimate];
        allAnimate.forEach(e => {
            e.classList.add("animate-active");
        });
        this.setScrollAnims();
    };

    /**
     * Function to check if an element is in user's view
     * @param element : HTMLElement, whatever element you want to check
     * @param scrollOffset : number, the offset from the bottom of the screen
     * @returns : boolean, whether the element is in view or not
     */
    static isInView(element: HTMLElement, scrollOffset: number = 0) {
        const elementTop: number = element.getBoundingClientRect().top;
        return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
        );
    };
}

export default AnimationsRepository;