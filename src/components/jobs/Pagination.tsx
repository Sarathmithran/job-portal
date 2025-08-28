import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationProps } from "@/types/pagination";

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalItems, 
  itemsPerPage 
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;
  
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    
    // Update the URL
    router.push(`/jobs?${params.toString()}`);
  };
  
  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
      <div className="flex items-center gap-3 sm:gap-6 lg:gap-[24px]">
        {/* Previous Button - Made smaller on mobile */}
        <Button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 sm:gap-2 lg:gap-[4px] px-3 sm:px-4 lg:px-[16px] py-1.5 sm:py-2.5 lg:py-[6px] text-base sm:text-xl lg:text-[20px] font-figtree font-medium ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-[#6c757d] hover:bg-[#bdbec0] hover:text-white'
          } bg-transparent border-2 border-[#6c757d] rounded-lg transition-all duration-200`}
        >
          <Image
            src="/images/img_arrowright.svg"
            alt="Arrow left"
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px] rotate-180"
          />
          <span className="hidden xs:inline">Prev</span>
        </Button>
        
        {/* Page Numbers - Made smaller on mobile */}
        {pageNumbers.map((pageNum) => (
          <Button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-3 sm:px-4 lg:px-[16px] py-1.5 sm:py-2.5 lg:py-[6px] text-base sm:text-xl lg:text-[20px] font-figtree font-semibold rounded-lg ${
              pageNum === currentPage
                ? 'text-white bg-[#309689]'
                : 'text-[#6c757d] bg-transparent border-2 border-[#6c757d] hover:bg-[#6c757d] hover:text-white'
            } transition-all duration-200`}
          >
            {pageNum}
          </Button>
        ))}
        
        {/* Next Button - Made smaller on mobile */}
        <Button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 sm:gap-2 lg:gap-[4px] px-3 sm:px-4 lg:px-[16px] py-1.5 sm:py-2.5 lg:py-[6px] text-base sm:text-xl lg:text-[20px] font-figtree font-medium ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-[#6c757d] hover:bg-[#bdbec0] hover:text-white'
          } bg-transparent border-2 border-[#6c757d] rounded-lg transition-all duration-200`}
        >
          <span className="hidden xs:inline">Next</span>
          <Image
            src="/images/img_arrowright.svg"
            alt="Arrow right"
            width={20}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[24px] lg:h-[24px]"
          />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;