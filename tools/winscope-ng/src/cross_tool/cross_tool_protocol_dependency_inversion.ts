/*
 * Copyright (C) 2022 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {RealTimestamp} from "common/trace/timestamp";

export type OnBugreportReceived = (bugreport: File, timestamp?: RealTimestamp) => Promise<void>;
export type OnTimestampReceived = (timestamp: RealTimestamp) => Promise<void>;

export interface CrossToolProtocolDependencyInversion {
  setOnBugreportReceived(callback: OnBugreportReceived): void;
  setOnTimestampReceived(callback: OnTimestampReceived): void;
  sendTimestamp(timestamp: RealTimestamp): void;
}
