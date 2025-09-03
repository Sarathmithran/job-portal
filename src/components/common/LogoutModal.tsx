import { logout } from '@/store/auth/authThunk';
import { AppDispatch } from '@/store/store';
import React from 'react'
import { useDispatch } from 'react-redux';

interface LogoutModalProps {
  showConfirm: boolean;
  setShowConfirm: (show: boolean) => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ showConfirm, setShowConfirm }) => {

    const dispatch = useDispatch<AppDispatch>();
    const handleLogout = () => {
        try {
            dispatch(logout());
            setShowConfirm(false);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

  return (
    <>
        {showConfirm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setShowConfirm(false)}
              ></div>

              {/* Modal content */}
              <div className="relative bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-sm mx-auto z-10">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Confirm Logout
                </h2>
                <p className="text-gray-600 mb-5">
                  Are you sure you want to log out?
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="px-4 py-2 cursor-pointer rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                  >
                    No
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 cursor-pointer rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default LogoutModal