export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  // 定義一個返回字串的 Function
  markerContent(): string;
  color: string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        center: {
          lat: 24,
          lng: 120.7,
        },
        zoom: 10,
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
        shouldFocus: false,
      });
    });
  }
}
