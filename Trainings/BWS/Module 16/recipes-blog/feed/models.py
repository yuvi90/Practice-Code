from django.db import models
from sorl.thumbnail import ImageField

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=140, blank=False, null=False)
    description = models.TextField()
    image = ImageField()
    date = models.DateField()

    def __str__(self):
        return self.title