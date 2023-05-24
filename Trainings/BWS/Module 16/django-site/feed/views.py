# Function Based
from typing import Any, Dict
from django import http
from django.http import HttpResponse
from django.shortcuts import render
# Class Based
from django.views.generic import TemplateView, DetailView, FormView

from .models import Post
from .forms import PostForm
from django.contrib import messages

# Create your views here.

class HomePageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["my_thing"] = "Hey There, This is Dynamic"
        context["posts"] = Post.objects.all().order_by('-id')
        return context
    
class PostDetailView(DetailView):
    template_name = "detail.html"
    model = Post

class AddPostView(FormView):
    template_name = "form.html"
    form_class = PostForm
    success_url = "/"

    def dispatch(self, request, *args, **kwargs):
        self.request = request
        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        # create new post
        new_object = Post.objects.create(
            text = form.cleaned_data['text'],
            image = form.cleaned_data['image'],
        )
        messages.add_message(self.request, messages.SUCCESS, 'Submitted Successfully')
        print("Submit Successfully")
        return super().form_valid(form)