// Source: https://github.com/excid3/tailwindcss-stimulus-components

//  <div data-controller="tabs" data-tabs-active-tab="active-tab">
//   <ul class="list-reset list-none flex border-b">
//     <li class="mr-1" data-target="tabs.tab" data-action="click->tabs#change">
//       <a class="inline-block py-2 px-4 text-primary font-semibold no-underline" href="#">Active</a>
//     </li>
//     <li class="mr-1" data-target="tabs.tab" data-action="click->tabs#change">
//       <a class="inline-block py-2 px-4 text-primary font-semibold no-underline" href="#">Tab</a>
//     </li>
//     <li class="mr-1" data-target="tabs.tab" data-action="click->tabs#change">
//       <a class="inline-block py-2 px-4 text-primary font-semibold no-underline" href="#">Tab</a>
//     </li>
//     <li class="mr-1">
//       <a class="inline-block py-2 px-4 text-gray-400 font-semibold no-underline" href="#">Tab</a>
//     </li>
//   </ul>

//   <div class="hidden py-4 px-4" data-target="tabs.panel">
//     Tab panel 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non recusandae, commodi repudiandae exercitationem, architecto assumenda nobis doloribus, deleniti obcaecati quaerat at quam! Rerum vitae quam culpa! Voluptates dolore, molestiae sint.
//   </div>

//   <div class="hidden py-4 px-4" data-target="tabs.panel">
//     Tab panel 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolorum, tempora hic odit consectetur saepe ipsam necessitatibus itaque, numquam aspernatur repellendus veritatis suscipit expedita sed sit at, neque impedit nulla!
//   </div>

//   <div class="hidden py-4 px-4" data-target="tabs.panel">
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/y3niFzo5VLI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//   </div>
// </div>


import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['tab', 'panel']

  initialize() {
    this.activeTabClasses = (this.data.get('activeTab') || 'active').split(' ')
    this.showTab()
  }

  change(event) {
    event.preventDefault()
    this.index = this.tabTargets.indexOf(event.currentTarget)
  }

  showTab() {
    this.tabTargets.forEach((tab, index) => {
      const panel = this.panelTargets[index]
      panel.classList.toggle('hidden', index != this.index)

      if (index === this.index) {
        tab.classList.add(...this.activeTabClasses)
      } else {
        tab.classList.remove(...this.activeTabClasses)
      }
    })
  }

  get index() {
    return parseInt(this.data.get('index') || 0)
  }

  set index(value) {
    this.data.set('index', value)
    this.showTab()
  }
}