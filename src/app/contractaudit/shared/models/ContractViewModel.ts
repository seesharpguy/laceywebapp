/**
 * Contract Audit API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
import * as models from './models';

export interface ContractViewModel {
    

    id?: number;

    addBy?: number;

    addDate?: Date;

    businessSegmentId?: number;

    changeBy?: number;

    changeDate?: Date;

    claimsAuditorId?: number;

    contractSourceId?: number;

    contractStatusId?: number;

    contractTypeId?: number;

    effectiveDate?: Date;

    healthsystemName?: string;

    logicalDelete?: boolean;

    platformId?: number;

    restrictedClaimsAuditorId?: number;

    sourceContractId?: string;

    systemNotes?: string;

    terminationDate?: Date;

    businessSegmentName?: string;

    contractSourceName?: string;

    addByNavigationUserName?: string;

    addByNavigationFirstName?: string;

    addByNavigationLastName?: string;

    addByNavigationMiddleName?: string;

    changeByNavigationUserName?: string;

    changeByNavigationFirstName?: string;

    changeByNavigationLastName?: string;

    changeByNavigationMiddleName?: string;

    claimsAuditorUserName?: string;

    claimsAuditorFirstName?: string;

    claimsAuditorLastName?: string;

    claimsAuditorMiddleName?: string;

    contractStatusName?: string;

    contractTypeName?: string;

    restrictedClaimsAuditorUserName?: string;

    restrictedClaimsAuditorFirstName?: string;

    restrictedClaimsAuditorLastName?: string;

    restrictedClaimsAuditorMiddleName?: string;

    platformName?: string;

    specialProcessingInstructions?: string;

    contractProduct?: Array<models.ContractProductViewModel>;
}
