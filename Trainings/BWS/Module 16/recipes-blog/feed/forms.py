from django import forms

class PostForm(forms.Form):
    image = forms.FileField()
    title = forms.CharField()
    description = forms.CharField(widget=forms.Textarea)
