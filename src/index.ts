/***************************************************************************************************
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the MIT License. See LICENSE file in the project root for license information.
 **************************************************************************************************/

import * as core from "@actions/core";

import installRunner from "./install-runner";
import { joinList } from "./util/util";
import processInputs from "./process-inputs";
import { getMatchingRunners } from "./get-runners";

export async function run(): Promise<void> {
    const runnerConfig = processInputs();

    const matchingRunners = await getMatchingRunners(
        runnerConfig.githubPat, runnerConfig.runnerLocation, runnerConfig.runnerLabels,
    );

    if (matchingRunners && matchingRunners.length > 0) {
        const runnerNames = matchingRunners.map((runner) => runner.name);
        if (matchingRunners.length === 1) {
            core.info(`Success: Runner ${runnerNames[0]} matches the given labels.`);
        }
        else {
            core.info(`Success: Runners ${joinList(runnerNames)} match the given labels.`);
        }
        return;
    }

    core.info(`A matching runner was not found. Installing a runner now.`);

    await installRunner(runnerConfig);
}

run().catch((err) => core.setFailed(err.message));
