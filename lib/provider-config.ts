export type ProviderKey = "fireworks";
export type ModelMode = "performance" | "quality";

export const PROVIDERS: Record<
  ProviderKey,
  {
    displayName: string;
    iconPath: string;
    color: string;
    models: string[];
  }
> = {
  fireworks: {
    displayName: "Fireworks",
    iconPath: "/provider-icons/fireworks.svg",
    color: "from-orange-500 to-red-500",
    models: [
      "accounts/fireworks/models/flux-1-dev-fp8",
      "accounts/fireworks/models/flux-1-schnell-fp8",
      "accounts/fireworks/models/playground-v2-5-1024px-aesthetic",
      "accounts/fireworks/models/japanese-stable-diffusion-xl",
      "accounts/fireworks/models/playground-v2-1024px-aesthetic",
      "accounts/fireworks/models/SSD-1B",
      "accounts/fireworks/models/stable-diffusion-xl-1024-v1-0",
    ],
  },
};

export const MODEL_CONFIGS: Record<ModelMode, Record<ProviderKey, string>> = {
  performance: {
    fireworks: "accounts/fireworks/models/flux-1-schnell-fp8",
  },
  quality: {
    fireworks: "accounts/fireworks/models/flux-1-dev-fp8",
  },
};

export const PROVIDER_ORDER: ProviderKey[] = [
  "fireworks",
];

export const initializeProviderRecord = <T>(defaultValue?: T) =>
  Object.fromEntries(
    PROVIDER_ORDER.map((key) => [key, defaultValue])
  ) as Record<ProviderKey, T>;
