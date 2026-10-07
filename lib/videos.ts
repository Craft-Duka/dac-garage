export type GalleryVideo = { playbackId: string; title: string; description: string };

export const GALLERY_VIDEOS: GalleryVideo[] = [
  ["YGNaenQQJ3mxvmgfX728eAvZsbdsRiScvfjlL1ijVjw", "The art of the finish", "A closer look at the care behind every final detail."],
  ["01pD4haNroniliEH74eiBcWokRTXdn01AFxobDLzvmt58", "Care in every contour", "The workshop, the process and the details that matter."],
  ["fgoOaqvGwVNRsY7ntq02QwCT1D8d4XyLtZ9F9uDoL6I4", "Made to look its best", "Craftsmanship that brings a car back to its best."],
  ["00fajPRC00V8jCsbQ4qHbwzeQ2fGeV4wdLQeGw1nR2Etc", "Inside the workshop", "A glimpse at the people and precision behind the work."],
  ["gCmko9cSs5tfrUP24RK6hOnTSdpFr4k01rkkoudKtxGU", "Beyond repair", "From first assessment to the finishing touch."],
].map(([playbackId, title, description]) => ({ playbackId, title, description }));
