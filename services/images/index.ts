class ImageSizes {
  protected baseUrl = "https://image.tmdb.org/t/p/";

  protected formatUrl(path: string) {
    if (!path) return;
    if (!path.startsWith("/")) return `/${path}`;
    return path;
  }
  original(path: string) {
    return `${this.baseUrl}original${this.formatUrl(path)}`;
  }
}

class BackdropSize extends ImageSizes {
  w300(path: string) {
    return `${this.baseUrl}w300${super.formatUrl(path)}`;
  }
  w780(path: string) {
    return `${this.baseUrl}w780${super.formatUrl(path)}`;
  }
  w1280(path: string) {
    return `${this.baseUrl}w1280${super.formatUrl(path)}`;
  }
  original(path: string) {
    return `${this.baseUrl}original${super.formatUrl(path)}`;
  }
}

class LogoSizes extends ImageSizes {
  w45(path: string) {
    return `${this.baseUrl}w45${super.formatUrl(path)}`;
  }
  w92(path: string) {
    return `${this.baseUrl}w92${super.formatUrl(path)}`;
  }
  w154(path: string) {
    return `${this.baseUrl}w154${super.formatUrl(path)}`;
  }
  w185(path: string) {
    return `${this.baseUrl}w185${super.formatUrl(path)}`;
  }
  w300(path: string) {
    return `${this.baseUrl}w300${super.formatUrl(path)}`;
  }
  w500(path: string) {
    return `${this.baseUrl}w500${super.formatUrl(path)}`;
  }
}

class PosterSizes extends ImageSizes {
  w92(path: string) {
    return `${this.baseUrl}w92${super.formatUrl(path)}`;
  }
  w154(path: string) {
    return `${this.baseUrl}w154${super.formatUrl(path)}`;
  }
  w185(path: string) {
    return `${this.baseUrl}w185${super.formatUrl(path)}`;
  }
  w342(path: string) {
    return `${this.baseUrl}w342${super.formatUrl(path)}`;
  }
  w500(path: string) {
    return `${this.baseUrl}w500${super.formatUrl(path)}`;
  }
  w780(path: string) {
    return `${this.baseUrl}w780${super.formatUrl(path)}`;
  }
}

class ProfileSizes extends ImageSizes {
  w45(path: string) {
    return `${this.baseUrl}w45${super.formatUrl(path)}`;
  }
  w185(path: string) {
    return `${this.baseUrl}w185${super.formatUrl(path)}`;
  }
  h632(path: string) {
    return `${this.baseUrl}h632${super.formatUrl(path)}`;
  }
}

class StillSizes extends ImageSizes {
  w92(path: string) {
    return `${this.baseUrl}w92${super.formatUrl(path)}`;
  }
  w185(path: string) {
    return `${this.baseUrl}w185${super.formatUrl(path)}`;
  }
  w300(path: string) {
    return `${this.baseUrl}w300${super.formatUrl(path)}`;
  }
}

class ImageTypes {
  private static instance: ImageTypes;

  private constructor() {}

  static getInstance() {
    if (!ImageTypes.instance) {
      ImageTypes.instance = new ImageTypes();
    }
    return ImageTypes.instance;
  }

  backdrop = new BackdropSize();
  logo = new LogoSizes();
  poster = new PosterSizes();
  profile = new ProfileSizes();
  still = new StillSizes();
}

export default ImageTypes.getInstance();
