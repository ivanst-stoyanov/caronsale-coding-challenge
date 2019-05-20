import { IVehicleDamage, IVehicleImages, IVehicleValuation, IFile } from ".";

export interface IVehicle {
    vin?: string;
    make?: string;
    model?: string;
    ez?: string;
    mileageInKm?: number;
    category?: string; // I only have the enum values - [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ], but I do not have the category names
    // so I will not create an enum since it is silly to have an enum with only numbers inside.
    transmission?: string;
    color?: string;
    upholstery?: string;
    fuelType?: string;
    doors?: string;
    engineSizeInCcm?: number;
    enginePowerInHp?: number;
    dimensionWidthInCm?: number;
    dimensionHeightInCm?: number;
    dimensionLengthInCm?: number;
    unloadedWeightInKg?: number;
    lastHu?: string;
    huReportExists?: boolean;
    numPreOwners?: number;
    numKeys?: number;
    vatIdReportable?: boolean;
    fullServiceHistory?: boolean;
    lastCheckAtMileage?: number;
    euroNorm?: string;
    hadAccident?: boolean;
    accidentDescription?: string;
    additionalDamages?: string;
    damages?: IVehicleDamage[];
    isReadyToDrive?: boolean;
    vehicleCondition?: number;
    imageUrls?: IVehicleImages;
    attachments?: IFile[];
    urlToAttachment1?: string;
    urlToAttachment2?: string;
    urlToAttachment3?: string;
    urlToVehicleSummarySheet?: string;
    estimatedValue: number;
    vehicleValuation: IVehicleValuation;
    id?: number;
    ac?: string;
    navigation?: number;
    headlights?: string;
    coupling?: string;
    vehicleHeater?: string;
    parkingAssistance?: string;
    sunRoof?: number;
    sportPackage?: number;
    additional?: string;
}
