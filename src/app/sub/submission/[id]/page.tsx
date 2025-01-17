import React from "react";
import { NextPage } from "next";
import SubmissionModule from "@/modules/SubmissionModule";
import { getUserData } from "@/hooks/user";
import { notFound, redirect } from "next/navigation";
import { getSubmissionData, getSubmissionItemData } from "@/hooks/submission";
import NotFound from "@/app/not-found";

const page: NextPage<{
  params: { id: string };
}> = async ({ params }) => {
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }

  const submissionItemData = await getSubmissionItemData(params.id);
  if (!submissionItemData) {
    <NotFound />
    return null
  }
  console.log(submissionItemData);

  const submissionData = await getSubmissionData(params.id);
  if (!submissionData) {
    <NotFound />
    return null
  }
  console.log(submissionData);

  return (
    <div className="flex justify-center flex-col gap-1 pt-16 items-center overflow-hidden">
      <SubmissionModule
        submissionItemData={submissionItemData}
        submissionData={submissionData}
      />
    </div>
  );
};

export default page;
