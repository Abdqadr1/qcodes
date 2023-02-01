<?php

namespace App\Policies;

use App\Models\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class NotificationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Admin  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAll(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }

    public function viewMine(Admin $user)
    {
        return $user->hasAnyRole('admin', 'writer', 'editor')
            ? Response::allow()
            : Response::deny("You're not authorized to perform this action");
    }


    public function create(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }

    public function delete(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }
}
