export type ApprovedMediaKind = "image" | "video";

export type ApprovedMediaPlacement =
  | "hero"
  | "pain"
  | "value"
  | "process"
  | "gallery";

export interface ApprovedMediaItem {
  alt: string;
  caption: string;
  height: number;
  kind: ApprovedMediaKind;
  placement: ApprovedMediaPlacement;
  posterSrc?: string;
  src: string;
  width: number;
}

const APPROVED_MEDIA_BASE_PATH = "/marena/approved-lp";

export const approvedMedia = {
  hero: {
    kind: "image",
    placement: "hero",
    src: `${APPROVED_MEDIA_BASE_PATH}/marena-04.webp`,
    alt: "Rodovia com equipe e equipamento MARENA em operação na faixa de domínio",
    caption: "Execução em faixa de domínio com mobilização real de campo.",
    width: 1280,
    height: 960,
  },
  pain: {
    kind: "image",
    placement: "pain",
    src: `${APPROVED_MEDIA_BASE_PATH}/marena-03.webp`,
    alt: "Equipe MARENA aplicando solução em área de solo exposto ao lado de rodovia",
    caption: "Solo exposto e drenagem pedem ação técnica antes que o problema avance.",
    width: 960,
    height: 1280,
  },
  value: {
    kind: "image",
    placement: "value",
    src: `${APPROVED_MEDIA_BASE_PATH}/marena-05.webp`,
    alt: "Equipe MARENA abastecendo equipamento de hidrossemeadura em campo",
    caption: "Equipamento, equipe e insumos mobilizados para execução em campo.",
    width: 1280,
    height: 960,
  },
  processVideo: {
    kind: "video",
    placement: "process",
    src: `${APPROVED_MEDIA_BASE_PATH}/marena-video-01.webm`,
    posterSrc: `${APPROVED_MEDIA_BASE_PATH}/marena-02.webp`,
    alt: "Vídeo vertical de operação da MARENA em serviço de recuperação ambiental",
    caption: "Aplicação real: da avaliação técnica à execução no terreno.",
    width: 474,
    height: 850,
  },
  galleryVideo: {
    kind: "video",
    placement: "gallery",
    src: `${APPROVED_MEDIA_BASE_PATH}/marena-video-02.webm`,
    posterSrc: `${APPROVED_MEDIA_BASE_PATH}/marena-06.webp`,
    alt: "Vídeo vertical mostrando execução de campo da MARENA",
    caption: "Execução em campo com acompanhamento da equipe.",
    width: 474,
    height: 850,
  },
  gallery: [
    {
      kind: "image",
      placement: "gallery",
      src: `${APPROVED_MEDIA_BASE_PATH}/marena-01.webp`,
      alt: "Equipe MARENA trabalhando junto a caminhão de serviço em rodovia",
      caption: "Equipe e equipamento mobilizados",
      width: 1280,
      height: 960,
    },
    {
      kind: "image",
      placement: "gallery",
      src: `${APPROVED_MEDIA_BASE_PATH}/marena-05.webp`,
      alt: "Equipamento MARENA de hidrossemeadura sendo abastecido em campo",
      caption: "Preparação técnica da aplicação",
      width: 1280,
      height: 960,
    },
    {
      kind: "image",
      placement: "gallery",
      src: `${APPROVED_MEDIA_BASE_PATH}/marena-03.webp`,
      alt: "Aplicação de solução em solo exposto ao lado de rodovia",
      caption: "Aplicação em área vulnerável",
      width: 960,
      height: 1280,
    },
    {
      kind: "image",
      placement: "gallery",
      src: `${APPROVED_MEDIA_BASE_PATH}/marena-04.webp`,
      alt: "Trecho de rodovia com cones e equipe MARENA em operação",
      caption: "Operação em faixa de domínio",
      width: 1280,
      height: 960,
    },
    {
      kind: "image",
      placement: "gallery",
      src: `${APPROVED_MEDIA_BASE_PATH}/marena-06.webp`,
      alt: "Área de acostamento com revegetação inicial após aplicação",
      caption: "Revegetação inicial em campo",
      width: 720,
      height: 1280,
    },
    {
      kind: "image",
      placement: "gallery",
      src: `${APPROVED_MEDIA_BASE_PATH}/marena-07.webp`,
      alt: "Detalhe de brotos crescendo em área recuperada",
      caption: "Cobertura vegetal em desenvolvimento",
      width: 1280,
      height: 720,
    },
  ],
} satisfies Record<string, ApprovedMediaItem | ApprovedMediaItem[]>;
