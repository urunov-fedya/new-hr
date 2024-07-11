import { getUser, setUser as setSliceUser } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useStore';
import { getAuth } from '@/shared';

export const useAuth = () => {
    const user = useAppSelector(getUser);
    const dispatch = useAppDispatch();

    const setUser = (user: Record<string, object>) => {
        dispatch(setSliceUser(user));
    };

    const logout = () => {
        dispatch(setSliceUser(undefined));
        localStorage.clear();
    };

    const { token, isAuth } = getAuth();
    return { user, token, isAuth, setUser, logout };
};
