from django.shortcuts import render

# Create your views here.
def about(request):
    context = {
        'project_name': 'Моя Инженерная Фабрика',
        'project_description': 'Мы строим автоматические заводы на базе андезитовых сплавов...',
        'project_goals': 'Построить самую быструю линию сборки предметов.',
        'version': 'v2.4',
        'automation_rate': '85%',
        'speed_rpm': '128 RPM'
    }
    return render(request, 'about.html', context)