from django.views.generic import DetailView, ListView, UpdateView
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Post
from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.

class HomePageView(ListView):
    http_method_names = ['get']
    template_name = 'feed/home.html'
    model = Post
    context_object_name = 'posts'
    queryset = Post.objects.all().order_by("-id")[0:30]

class PostDetailView(DetailView):
    http_method_names = ['get']
    template_name = 'feed/detail.html'
    model = Post
    context_object_name = 'post'

class CreateNewPostView(LoginRequiredMixin, CreateView):
    model = Post
    template_name = "feed/create.html"
    fields = ['text']
    success_url = '/'

    def dispatch(self, request, *args, **kwargs):
        self.request = request
        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.author = self.request.user
        return super().form_valid(form)
    
    def post(self, request, *args, **kwargs):
        # TODO: There is a bug here when you go to /new/ to create a post.
        # You must figure out how to determine if this is an Ajax request (or not an ajax request).
        post = Post.objects.create(
            text=request.POST.get("text"),
            author=request.user,
        )

        return render(
            request,
            "includes/post.html",
            {
                "post": post,
                "show_detail_link": True,
            },
            content_type="application/html"
        )

class AccountSettingsView(UpdateView):
    pass