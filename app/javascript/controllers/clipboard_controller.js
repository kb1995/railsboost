// Source: https://github.com/eelcoj/stimulus-form-utilities/tree/master/src

// Example:

// <div data-controller="clipboard" data-clipboard-success-message="copied" class="flex">
//   <input class="form-input rounded-r-none focus:outline-none focus:border-gray-300 focus:shadow-none" data-target="clipboard.source" value="copy this text!" />
//   <button class="btn btn-secondary rounded-l-none" data-target="clipboard.button" data-action="click->clipboard#copy">copy</button>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "source", "button" ]

  connect() {
    this.successMessage = this.data.get("successMessage") || "Copied"
  }

  copy() {
    this.sourceTarget.select()
    document.execCommand("copy")
    this.setMessage()
  }

  setMessage() {
    this.buttonTarget.textContent = this.successMessage
  }
}
