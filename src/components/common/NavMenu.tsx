import React, { useState } from 'react'
import LogoutModal from './LogoutModal'
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const NavMenu = () => {
    const { user, isLoggedIn } = useAuth();
    const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
        {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <p className="text-white">
                Welcome {user?.displayName || user?.email} 🎉
              </p>
              <button
                onClick={() => setShowConfirm(true)}
                className="text-sm cursor-pointer font-semibold leading-5 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Logout
              </button>

              {/* Confirmation Modal */}
              <LogoutModal showConfirm={showConfirm} setShowConfirm={setShowConfirm} />
            </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                <Link
                  href="/login"
                  className="text-sm xl:text-[16px] font-figtree font-medium leading-5 text-white hover:text-[#ffffff99] transition-colors duration-200"
                  role="menuitem"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-sm xl:text-[16px] font-figtree font-semibold leading-5 text-white bg-[#309589] hover:bg-[#267a6f] px-4 xl:px-[20px] py-2 xl:py-[8px] rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 capitalize"
                  role="menuitem"
                >
                  Register
                </Link>
              </div>
            )}
    </>
  )
}

export default NavMenu