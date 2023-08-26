<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                  <div class="col-sm-6">
                      <h1>{{ $route.meta.title }}</h1>
                  </div>
                  <div class="col-sm-6">
                  </div>
              </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                      <div class="card card-secondary">
                            <div class="card-body">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Category Name</th>
                                            <th>Title</th>
                                            <th>Ingredients</th>
                                            <th>Instructions</th>
                                            <th>Preparation Time</th>
                                            <th>Serving Size</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(recipes) in recipes" :key="recipes.id">
                                            <td>{{ recipes.category_name }}</td>
                                            <td>{{ recipes.title }}</td>
                                            <td>{{ recipes.ingredients }}</td>
                                            <td>{{ recipes.instructions }}</td>
                                            <td>{{ recipes.preparation_time }}</td>
                                            <td>{{ recipes.serving_size }}</td>
                                            <td>{{ recipes.imageUrl }}</td>
                                            <td>
                                                <button class="btn btn-primary btn-sm" @click="approveRecipe(recipes.id,1)">Approve</button>
                                                <button class="btn btn-danger btn-sm" style="margin-left: 10px;" @click="deleteRecipe(recipes.id)">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </template>

  <script setup>
    import { ref } from 'vue';
    import RecipeService from '../../services/recipe.service';

    const recipes = ref([]);

    const getNonApprovedRecipes = async () => {
      RecipeService.getAll()
      .then((response) => {
        recipes.value = response.data.data
      })
    };

    const approveRecipe = async (id, isApproved) => {
      let data = {
        id: id,
        is_approved: isApproved
      }
      RecipeService.updateApproved(data)
      .then((response) => {
        getNonApprovedRecipes();
      })
    };

    const deleteRecipe = async (id) => {
      if (!confirm("Are you sure you want to delete this recipe?")) {
        return;
      }

      RecipeService.delete(id)
      .then((response) => {
        getNonApprovedRecipes();
      })
    };

    getNonApprovedRecipes();
  </script>