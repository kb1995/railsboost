// This controller removes the need for using gems like cocoon

// <div data-controller="nested-form">
//   <h3>Tasks</h3>
//   <template data-target="nested-form.template">
//     <%= f.fields_for :tasks, Task.new, child_index: "NEW_RECORD" do |task| %>
//       <%= render  "task", form: task %>
//     <% end %>
//   </template>
//   <%= f.fields_for :tasks do |task| %>
//     <%= render  "task", form: task %>
//   <% end %>
//   <div data-target="nested-form.links">
//     <%= link_to  "Add a Task", "#", class: "btn btn-primary", data: {action: "click->nested-form#add_association"} %>
//   </div>
// </div>

// ! Within the partial

// <div class="nested-fields" data-new-record="<%= form.object.new_record? %>">
//   <div class="form-group">
//     <%= form.text_field :name, class: "form-control" %>
//     <%= link_to  "Remove", "#", class: "btn btn-danger-500", data: {action: "click->nested-form#remove_association"} %>
//   </div>
//     <%= form.hidden_field :_destroy %>
// </div>

// ! In your controller, pass this in your controller

// tasks_attributes: [:id, :name, :_destroy]

import { Controller } from "stimulus"
export default class extends Controller {
  static targets = ["links", "template"]

  connect() {
    
  }

  add_association(event){
    event.preventDefault()

    var content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime())
    this.linksTarget.insertAdjacentHTML("beforebegin", content)
  }

  remove_association(event){
    event.preventDefault()
    
    let wrapper = event.target.closest(".nested-fields")
    if (wrapper.dataset.newRecord == "true"){
      wrapper.remove()
    } else{
      wrapper.querySelector("input[name*='_destroy']").value = 1
      wrapper.style.display = 'none'
    }
  }

}
