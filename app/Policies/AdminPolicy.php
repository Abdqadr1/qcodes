<?php

namespace App\Policies;

use App\Models\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class AdminPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAll(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Admin  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }

    public function getMessages(Admin $user)
    {
        return $user->hasAnyRole('admin', 'editor')
            ? Response::allow()
            : Response::deny('You must be an administrator or editor to perform this action');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Admin $user)
    {
        return $user->hasRole('admin')
            ? Response::allow()
            : Response::deny('You must be an administrator to perform this action');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\Admin  $user
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Admin $user, Admin $admin)
    {
        //
    }
}
