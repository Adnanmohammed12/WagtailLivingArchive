from pydoc import classname
from django.db import models
from django.shortcuts import render
from blog.models import BlogDetailPage
from modelcluster.fields import ParentalKey
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.contrib.forms.models import (
    AbstractEmailForm,
    AbstractFormField
)

from wagtail.contrib.routable_page.models import RoutablePageMixin, route

from wagtail.admin.edit_handlers import (
    FieldPanel,
    FieldRowPanel,
    InlinePanel,
    MultiFieldPanel
)
#from captcha.fields import ReCaptchaField
#from wagtail.core import blocks
#from wagtailstreamforms.fields import BaseField, register

from djangokeys import DjangoKeys
keys=DjangoKeys ("./livingarchive/settings/.env")

#@register('recaptcha')
class HomePage(AbstractEmailForm, Page):
    """Home Page model"""
    templates = "home/home_page.html"

    """to limit only 1 home page"""
    max_count = 1
    #captcha = ReCaptchaField()
    #get google maps api key from .env
    api_key = keys.str("API_KEY")

    banner_title = models.CharField(max_length=100, blank=False, null=True)
    intro = RichTextField(blank=True)
    thank_you_text = RichTextField(blank=True)

    content_panels = AbstractEmailForm.content_panels + Page.content_panels + [
        FieldPanel ("banner_title"),
        FieldPanel ("intro"),
            InlinePanel("form_fields", label="Form Fields"),
            FieldPanel ("thank_you_text"),
            MultiFieldPanel([
                FieldRowPanel([
                    FieldPanel("from_address", classname="col6"),
                    FieldPanel("to_address", classname="col6"),
                ]),
                FieldPanel("subject"),

            ], heading="Email Settings"),
    ]
    
    #to get detail from blog detail page
    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context"""
        context = super().get_context(request, *args, **kwargs)
        context["posts"] = BlogDetailPage.objects.live().all().order_by('-first_published_at')
        return context

    """set verbose name"""
    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Pages"


class FormField (AbstractFormField):
    page = ParentalKey(
        'HomePage',
        on_delete=models.CASCADE,
        related_name='form_fields',
    )