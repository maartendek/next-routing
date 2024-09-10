"use client";

import { getNewsForSlug } from "@/lib/news";
import { useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsItem = getNewsForSlug(params.slug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
