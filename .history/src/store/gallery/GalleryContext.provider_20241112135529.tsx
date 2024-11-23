import { galleryContext } from "./galleryContext";

export default function GalleryContextProvider({
  children,
}: IGalleryContextProviderProps) {
  return <galleryContext.Provider value={}>{children}</galleryContext.Provider>;
}
