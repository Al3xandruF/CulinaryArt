from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user


class IsChefOrReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only users with user_type='chef'
    to create chef bio.
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return (
            request.user.is_authenticated and request.user.profile.user_type == "chef"
        )


class IsRegularOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        # Permission for authenticated users, both regular/chef to view the list
        if request.method in permissions.SAFE_METHODS:
            return True
        return (
            request.user.is_authenticated
            and request.user.profile.user_type == "regular"
        )
