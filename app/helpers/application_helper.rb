# frozen_string_literal: true

module ApplicationHelper
  def alert_class(flash_type)
    {
      success: "alert-success",
      error: "alert-danger",
      alert: "alert-warning",
      notice: "alert-info"
    }.stringify_keys[flash_type.to_s] || flash_type.to_s
  end

  def render_icon(name, options = {})
    filename = "icons/#{name}.svg"

    options[:class] ||= "text-black"
    options[:aria] = true
    options[:nocomment] = true

    inline_svg_tag(filename, options)
  end

  def boolean_icon(value, options = {})
    value ? render_icon("check", options) : render_icon("x", options)
  end
end
