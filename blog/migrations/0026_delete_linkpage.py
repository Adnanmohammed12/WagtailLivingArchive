# Generated by Django 4.1.8 on 2023-05-06 11:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0025_remove_bloglistingpage_featured_articles_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='LinkPage',
        ),
    ]
