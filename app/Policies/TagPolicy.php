<?php

namespace App\Policies;

use App\Models\Tag;
use App\Models\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class TagPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Admin  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Admin $user)
    {
        return $user->hasAnyRole('editor', 'admin')
            ? Response::allow()
            : Response::deny('You must be an administrator or editor to perform this action');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Admin $user)
    {
        return $user->hasAnyRole('editor', 'admin')
            ? Response::allow()
            : Response::deny('You must be an administrator or editor to perform this action');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Admin $user, Tag $tag)
    {
        if ($tag->articles_count > 0) {
            return Response::deny('Invalid action, this tag has articles.');
        }
        return $user->hasAnyRole('editor', 'admin', 'writer')
            ? Response::allow()
            : Response::deny('You are not authorized to perform this action');
    }
}
