// Source: https://github.com/excid3/tailwindcss-stimulus-components

// <div data-controller="modal">
//   <button class="btn btn-primary" data-action="click->modal#open">Open Small Modal</button>

//   <div data-target="modal.container" data-action="click->modal#closeBackground keyup@window->modal#closeWithKeyboard" class="hidden animated fadeIn fixed inset-0 overflow-y-auto flex items-center justify-center" style="z-index: 9999;">
//     <!-- Modal Inner Container -->
//     <div class="max-w-sm max-h-screen w-full relative">
//       <!-- Modal Card -->
//       <div class="m-1 bg-white rounded shadow">
//         <div class="p-8">
//           <h2 class="text-xl mb-4">Small Modal Content</h2>
//           <p class="mb-4">This is an example modal dialog box.</p>

//           <div class="flex justify-end items-center flex-wrap mt-6">
//             <button class="btn btn-primary" data-action="click->modal#close">Close</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> 


import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['container'];

  connect() {
    // The class we should toggle on the container
    this.toggleClass = this.data.get('class') || 'hidden';

    // The HTML for the background element
    this.backgroundHtml = this.data.get('backgroundHtml') || this._backgroundHTML();

    // The ID of the background to hide/remove
    this.backgroundId = this.data.get('backgroundId') || 'modal-background';

    // Let the user close the modal by clicking on the background
    this.allowBackgroundClose = (this.data.get('allowBackgroundClose') || 'true') === 'true';
  }

  open(e) {
    e.preventDefault();
    e.target.blur();

    // Lock the scroll and save current scroll position
    this.lockScroll();

    // Unhide the modal
    this.containerTarget.classList.remove(this.toggleClass);

    // Insert the background
    if (!this.data.get("disable-backdrop")) {
      document.body.insertAdjacentHTML('beforeend', this.backgroundHtml);
      this.background = document.querySelector(`#${this.backgroundId}`);
    }
  }

  close(e) {
    e.preventDefault();

    // Unlock the scroll and restore previous scroll position
    this.unlockScroll();

    // Hide the modal
    this.containerTarget.classList.add(this.toggleClass);

    // Remove the background
    if (this.background) { this.background.remove() }
  }

  closeBackground(e) {
    if (this.allowBackgroundClose && e.target === this.containerTarget) {
      this.close(e);
    }
  }

  closeWithKeyboard(e) {
    if (e.keyCode === 27 && !this.containerTarget.classList.contains(this.toggleClass)) {
      this.close(e);
    }
  }

  _backgroundHTML() {
    return '<div id="modal-background" class="fixed top-0 left-0 w-full h-full" style="background-color: rgba(0, 0, 0, 0.8); z-index: 9998;"></div>';
  }

  lockScroll() {
    // Add right padding to the body so the page doesn't shift
    // when we disable scrolling
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Save the scroll position
    this.saveScrollPosition();

    // Add classes to body to fix its position
    document.body.classList.add('fixed', 'inset-x-0', 'overflow-hidden');

    // Add negative top position in order for body to stay in place
    document.body.style.top = `-${this.scrollPosition}px`;
  }

  unlockScroll() {
    // Remove tweaks for scrollbar
    document.body.style.paddingRight = null;

    // Remove classes from body to unfix position
    document.body.classList.remove('fixed', 'inset-x-0', 'overflow-hidden');

    // Restore the scroll position of the body before it got locked
    this.restoreScrollPosition();

    // Remove the negative top inline style from body
    document.body.style.top = null;
  }

  saveScrollPosition() {
    this.scrollPosition = window.pageYOffset || document.body.scrollTop;
  }

  restoreScrollPosition() {
    document.documentElement.scrollTop = this.scrollPosition;
  }
}