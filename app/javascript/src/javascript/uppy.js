
const Uppy = require("@uppy/core")
const Dashboard = require("@uppy/dashboard")
const ActiveStorageUpload = require("@excid3/uppy-activestorage-upload")
require("@uppy/core/dist/style.css")
require("@uppy/dashboard/dist/style.css")

$(document).on("turbolinks:load", () => {
  document.querySelectorAll("[data-uppy]").forEach(element => setupUppy(element))
})

function setupUppy(element){
  let trigger = element.querySelector("[data-behaviour='uppy-trigger']")
  let form = element.closest("form")
  let direct_upload_url = document.querySelector("meta[name='direct-upload-url']").getAttribute("content")
  let field_name = element.dataset.uppy

  trigger.addEventListener("click", (event) => event.preventDefault())

  let uppy = Uppy({
    autoProceed: true,
    allowMultipleUploads: false,
    logger: Uppy.debugLogger
  })

  uppy.use(ActiveStorageUpload, {
    directUploadUrl: direct_upload_url
  })

  uppy.use(Dashboard, {
    trigger: trigger,
    closeAfterFinish: true,
  })

  uppy.on("complete", (result) => {
    element.querySelectorAll("[data-pending-upload]").forEach(element => element.parentNode.removeChild(element))
    result.successful.forEach(file => {
      setPreview(element, file)
      appendUploadedFile(element, file, field_name)
    })

    uppy.reset()
  })
}

function appendUploadedFile(element, file, field_name){
  const hiddenField = document.createElement("input")

  hiddenField.setAttribute("type", "hidden")
  hiddenField.setAttribute("name", field_name)
  hiddenField.setAttribute("data-pending-upload", true)
  hiddenField.setAttribute("value", file.response.signed_id)
  element.appendChild(hiddenField)
}

function setPreview(element, file){
  let preview = element.querySelector("[data-behaviour='uppy-preview']")
  if (preview){
    preview.src = file.preview
  }
}