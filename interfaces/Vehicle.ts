export interface Vehicle {
  make: string;
  model: string;
}

// Declaration merging
export interface Vehicle {
    isElectric?: boolean;
  }
