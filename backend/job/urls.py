from django.urls import path
from . import views

urlpatterns = [
    path('jobs/', views.getAllJobs, name='jobs'),
    path('jobs/new/', views.newJob, name='new_job'),
    path('job/<str:pk>', views.getJob,name = 'job'),
    path('jobs/<str:pk>/update/', views.updateJob, name='update_job'),
    path('jobs/<str:pk>/apply/', views.applyToJob, name='apply_to_job'),
    path('me/jobs/applied/', views.getCurrentUserAppliedJobs, name='current_user_applied_jobs'),
]