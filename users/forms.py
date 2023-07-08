from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.forms import forms

User = get_user_model()
class UserCreationForm(UserCreationForm):
    class PasswordResetForm(forms.Form):
        email = forms.EmailField(
            label=_("Email"),
            max_length=254,
            widget=forms.EmailInput(attrs={"autocomplete": "email"}),
        )
    class Meta(UserCreationForm.Meta):
        model = User