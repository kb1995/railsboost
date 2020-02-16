# frozen_string_literal: true

# Please do not make direct changes to this file!
# This generator is maintained by the community around simple_form-bootstrap:
# https://github.com/rafaelfranca/simple_form-bootstrap
# All future development, tests, and organization should happen there.
# Background history: https://github.com/plataformatec/simple_form/issues/1561

# Uncomment this and change the path if necessary to include your own
# components.
# See https://github.com/plataformatec/simple_form#custom-components
# to know more about custom components.
# Dir[Rails.root.join('lib/components/**/*.rb')].each { |f| require f }

# TODO further customisation needed using https://tailwindcss-custom-forms.netlify.com/

# Use this setup block to configure all options available in SimpleForm.
SimpleForm.setup do |config|

  # Default class for buttons
  config.button_class = 'btn btn-primary'

  # Define the default class of the input wrapper of the boolean input.
  config.boolean_label_class = 'block'

  # How the label text should be generated altogether with the required text.
  config.label_text = lambda { |label, required, explicit_label| "#{label}" }

  # Define the way to render check boxes / radio buttons with labels.
  config.boolean_style = :inline

  # You can wrap each item in a collection of radio/check boxes with a tag
  config.item_wrapper_tag = :div

  # Defines if the default input wrapper class should be included in radio
  # collection wrappers.
  config.include_default_input_wrapper_class = false

  # CSS class to add for error notification helper.
  config.error_notification_class = 'my-3 text-red-700'

  # Method used to tidy up errors. Specify any Rails Array method.
  # :first lists the first message for each field.
  # :to_sentence to list all errors for each field.
  config.error_method = :to_sentence

  # add validation classes to `input_field`
  # TODO style these
  config.input_field_error_class = 'is-invalid'
  config.input_field_valid_class = 'is-valid'

  # horizontal forms
  #
  # horizontal default_wrapper
  config.wrappers :horizontal_form, tag: 'div', class: 'flex flex-col lg:flex-row lg:items-center mb-3', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :minlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'lg:w-1/4 mb-2 lg:mb-0'
    b.wrapper :grid_wrapper, tag: 'div', class: 'w-full flex flex-col' do |ba|
      ba.use :input, class: 'form-input', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'inline-block text-red-700 mt-1 lg:ml-3' }
      ba.use :hint, wrap_with: { tag: 'div', class: 'inline-block text-gray-700 lg:ml-3' }
    end
  end

  # horizontal input for boolean
  config.wrappers :horizontal_boolean, tag: 'div', class: 'flex items-center mb-3', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'lg:w-1/4'

    b.wrapper :grid_wrapper, tag: 'div', class: 'flex items-start w-full' do |ba|
      ba.use :input, class: 'form-checkbox', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'inline-block text-red-700 mt-1 lg:ml-3' }
      ba.use :hint, wrap_with: { tag: 'div', class: 'inline-block text-gray-700 lg:ml-3' }
    end
  end

  # horizontal input for boolean
  config.wrappers :horizontal_boolean_inline, tag: 'div', class: 'w-full flex items-center mb-3', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.optional :readonly

  b.wrapper :grid_wrapper, tag: 'div', class: 'lg:w-1/4' do |ba|
  end
    b.wrapper :grid_wrapper, tag: 'div', class: 'w-full flex items-center' do |ba|
      ba.use :input, class: 'form-checkbox', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :label, class: 'inline-block ml-3'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'inline-block text-red-700 lg:ml-3' }
      ba.use :hint, wrap_with: { tag: 'div', class: 'inline-block text-gray-700 lg:ml-3' }
    end
  end

  # TODO when you need radio buttons
  # horizontal input for radio buttons and check boxes
  config.wrappers :horizontal_collection, item_wrapper_class: 'form-check', tag: 'div', class: 'form-group row', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-sm-3 form-control-label'
    b.wrapper :grid_wrapper, tag: 'div', class: 'col-sm-9' do |ba|
      ba.use :input, class: 'form-checkbox form-radio', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'invalid-feedback d-block' }
      ba.use :hint, wrap_with: { tag: 'small', class: 'form-text text-muted' }
    end
  end

  # TODO when you need radio buttons
  # horizontal input for inline radio buttons and check boxes
  config.wrappers :horizontal_collection_inline, item_wrapper_class: 'form-check form-check-inline', tag: 'div', class: 'form-group row', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-sm-3 form-control-label'
    b.wrapper :grid_wrapper, tag: 'div', class: 'col-sm-9' do |ba|
      ba.use :input, class: 'form-checkbox form-radio', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'invalid-feedback d-block' }
      ba.use :hint, wrap_with: { tag: 'small', class: 'form-text text-muted' }
    end
  end

  # TODO is it needed now that we have uppy?
  # horizontal file input
  config.wrappers :horizontal_file, tag: 'div', class: 'form-group row', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :minlength
    b.optional :readonly
    b.use :label, class: 'col-sm-3 form-control-label'
    b.wrapper :grid_wrapper, tag: 'div', class: 'col-sm-9' do |ba|
      ba.use :input, error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'invalid-feedback d-block' }
      ba.use :hint, wrap_with: { tag: 'small', class: 'form-text text-muted' }
    end
  end

  # horizontal multi select
  config.wrappers :horizontal_multi_select, tag: 'div', class: 'form-group row', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.optional :readonly
    b.use :label, class: 'col-sm-3 control-label'
    b.wrapper :grid_wrapper, tag: 'div', class: 'col-sm-9' do |ba|
      ba.wrapper tag: 'div', class: 'd-flex flex-row justify-content-between align-items-center' do |bb|
        bb.use :input, class: 'form-multiselect mx-1', error_class: 'is-invalid', valid_class: 'is-valid'
      end
      ba.use :full_error, wrap_with: { tag: 'div', class: 'invalid-feedback d-block' }
      ba.use :hint, wrap_with: { tag: 'small', class: 'form-text text-muted' }
    end
  end

  # horizontal range input
  config.wrappers :horizontal_range, tag: 'div', class: 'form-group row', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :readonly
    b.optional :step
    b.use :label, class: 'col-sm-3 form-control-label'
    b.wrapper :grid_wrapper, tag: 'div', class: 'col-sm-9' do |ba|
      ba.use :input, class: 'form-control-range', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'invalid-feedback d-block' }
      ba.use :hint, wrap_with: { tag: 'small', class: 'form-text text-muted' }
    end
  end

  config.wrappers :vertical_form, tag: 'div', class: 'flex flex-col items-center mb-3', error_class: 'form-group-invalid', valid_class: 'form-group-valid' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :minlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly

    b.use :label, class: 'w-full text-left block text-muted mb-1'
    b.wrapper :grid_wrapper, tag: 'div', class: 'w-full' do |ba|
      ba.use :input, class: 'form-input', error_class: 'is-invalid', valid_class: 'is-valid'
      ba.use :full_error, wrap_with: { tag: 'div', class: 'block text-red-700 text-sm text-left mt-1' }
      ba.use :hint, wrap_with: { tag: 'div', class: 'block text-gray-700 text-sm text-left mt-1' }
    end
  end

  # The default wrapper to be used by the FormBuilder.
  config.default_wrapper = :horizontal_form

  # Custom wrappers for input types. This should be a hash containing an input
  # type as key and the wrapper that will be used for all inputs with specified type.
  config.wrapper_mappings = {
    boolean: :horizontal_boolean,
    check_boxes: :horizontal_collection,
    date: :horizontal_multi_select,
    datetime: :horizontal_multi_select,
    file: :horizontal_file,
    radio_buttons: :horizontal_collection,
    range: :horizontal_range,
    time: :horizontal_multi_select
  }

end
