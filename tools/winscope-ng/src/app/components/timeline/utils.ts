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

import { Timestamp } from "common/trace/timestamp";
import { TraceType } from "common/trace/trace_type";

export type Segment = { from: number, to: number }
export type BigIntSegment = { from: bigint, to: bigint }
export type TimeRange = { from: Timestamp, to: Timestamp }
export type MiniTimelineData = {
  width: bigint,
  selection: BigIntSegment
  traceSegments: Map<TraceType, BigIntSegment[]>
}
export type TimelineData = Map<TraceType, bigint[]>