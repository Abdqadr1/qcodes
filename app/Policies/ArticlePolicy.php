<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class ArticlePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Admin  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAll(Admin $user)
    {
        return ($user->hasAnyRole('editor', 'admin'))
            ? Response::allow()
            : Response::deny('You must be an administrator or editor to perform this action');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Admin  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Admin $user)
    {
        return ($user->hasAnyRole('writer', 'editor', 'admin'))
            ? Response::allow()
            : Response::deny('You must be an administrator or editor to perform this action');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Admin $user, Article $article)
    {
        return ($article->author_id == $user->id || $user->hasAnyRole('editor', 'admin'))
            ? Response::allow()
            : Response::deny('You do not own this article');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Admin $user, Article $article)
    {
        return ($article->author_id == $user->id || $user->hasAnyRole('editor', 'admin'))
            ? Response::allow()
            : Response::deny('You do not own this article');
    }
}
