import ModalBackdrop from "@/components/site/modal-backdrop";
import { getNewsForSlug } from "@/lib/news";

export default function InterceptedImagePage({ params }) {
  const newsItem = getNewsForSlug(params.slug);

  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
