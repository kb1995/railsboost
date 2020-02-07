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

  def render_svg(name, options = {})
    options[:title] ||= name.underscore.humanize
    options[:class] = options[:styles]
    options[:aria] = true
    options[:nocomment] = true

    inline_svg_tag("#{name}.svg", options)
  end

  def render_icon(name, styles = "")
    "<i class='#{styles}' data-feather='#{name}'></i>".html_safe
  end

  def boolean_icon(value, styles = "")
    value ? render_icon("check", styles) : render_icon("x", styles)
  end
end
