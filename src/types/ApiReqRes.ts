export interface GentiResponse<T> {
    success: boolean;
    response: T | null;
    errorCode: null | number;
    errorMessage: null | string;
}

export const bankName = [
    "",
    "국민은행",
    "신한은행",
    "하나은행",
    "우리은행",
    "기업은행",
    "SC제일은행",
    "씨티은행",
    "농협은행",
    "수협은행",
    "케이뱅크",
    "카카오뱅크",
    "토스뱅크",
    "대구은행",
    "부산은행",
    "경남은행",
    "광주은행",
    "전북은행",
    "제주은행",
] as const;

export type BankType = (typeof bankName)[number];

export type PictureGenerateRequestStatus = "CREATED" | "ASSIGNING" | "IN_PROGRESS" | "CANCELED" | "REPORTED" | "COMPLETED";
export type CameraAngle = "위에서 촬영" | "같은 높이에서 촬영" | "아래에서 촬영";
export type ShotCoverage = "얼굴만 클로즈업" | "허리 위로 촬영" | "무릎 위로 촬영" | "전신 촬영";

export interface MyInfo {
    workable: boolean;
    bankType: BankType;
    accountNumber: string;
}

export interface MatchedWork {
    requestId: number;
    prompt: string;
    cameraAngle: CameraAngle;
    shotCoverage: ShotCoverage;
    status: PictureGenerateRequestStatus;
    createdAt: string;
}

export interface DetailedPictureGenerate {
    id: number;
    requesterId: number;
    requesterEmail: string;
    prompt: string;
    promptAdvanced: string | null;
    facePictureUrlList: string[];
    posePictureId: number;
    posePictureUrl: string;
    cameraAngle: CameraAngle;
    shotCoverage: ShotCoverage;
    requestStatus: PictureGenerateRequestStatus;
    createdAt: string;
    responseList: {
        id: number;
        memo: string | null;
        pictureCreatedByCreatorList: {
            id: number;
            url: string;
        }[];
        pictureCompletedList: {
            id: number;
            url: string;
        }[];
        responseStatus: PictureGenerateRequestStatus;
        createdAt: string;
    }[];
}

export type CreatorStatusResponse = GentiResponse<Pick<MyInfo, "workable">>;
export type MyInfoResponse = GentiResponse<MyInfo>;
export type MatchedWorkResponse = GentiResponse<MatchedWork>;
export type DetailedPictureGenerateResponse = GentiResponse<DetailedPictureGenerate>;
