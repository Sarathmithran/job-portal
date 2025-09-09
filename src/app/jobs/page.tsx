import { Suspense } from "react";
import JobsContent from "../../components/jobs/JobContent";

export default function Jobs() {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <JobsContent />
    </Suspense>
  );
}
