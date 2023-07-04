from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render
from django.views import View


# Create your views here.
class register(View):
    template_name = 'registration/register.html'
    def get(self, request):
        context = {
            'form':UserCreationForm()
        }
        return render(request, self.template_name, context)
