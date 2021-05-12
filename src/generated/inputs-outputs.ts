// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * GitHub Personal access token. The token must have the "repo" permission scope.
     * For organization runners, the token must also have the "admin:org" scope.
     * Required: true
     * Default: None.
     */
    GITHUB_PAT = "github_pat",
    /**
     * Version of our Helm Chart to install. Defaults to the latest.
     * Required: false
     * Default: None.
     */
    HELM_CHART_VERSION = "helm_chart_version",
    /**
     * Any other arguments to pass to the 'helm install' command.
     * Separate arguments by newline. Do not use quotes - @actions/exec will do the quoting for you.
     * Required: false
     * Default: None.
     */
    HELM_EXTRA_ARGS = "helm_extra_args",
    /**
     * The Helm Release name to give the new runner release. Defaults to the repository or org name plus "-runners".
     * Required: false
     * Default: None.
     */
    HELM_RELEASE_NAME = "helm_release_name",
    /**
     * Uninstall any release that matches the `helm_release_name` and `namespace` before running `helm install`.
     * If this is false, and the release exists, the action will fail when the `helm install` fails.
     * Required: false
     * Default: "true"
     */
    HELM_UNINSTALL_EXISTING = "helm_uninstall_existing",
    /**
     * Optional namespace (aka project) to pass to all Helm or Kubernetes commands.
     * Required: false
     * Default: None.
     */
    NAMESPACE = "namespace",
    /**
     * Container image to use for the runner.
     * Required: false
     * Default: None.
     */
    RUNNER_IMAGE = "runner_image",
    /**
     * Labels in the runners to check for.
     * For multiple labels, separate by comma and an optional space. For example, "label1, label2".
     * Required: false
     * Default: None.
     */
    RUNNER_LABELS = "runner_labels",
    /**
     * Repository or organization for the self-hosted runner.
     * For example, "redhat-actions/check-self-hosted-runner" for a repository, or "redhat-actions" for an organization.
     * Defaults to the current repository.
     * Required: false
     * Default: None.
     */
    RUNNER_LOCATION = "runner_location",
    /**
     * Number of runner replicas to create.
     * Required: false
     * Default: "1"
     */
    RUNNER_REPLICAS = "runner_replicas",
    /**
     * Tag to use for the runner container image.
     * Required: false
     * Default: None.
     */
    RUNNER_TAG = "runner_tag",
}

export enum Outputs {
    /**
     * The name of the Helm release that was created.
     * If a matching runner was already present, the Helm install is skipped, and this value is undefined.
     * Required: false
     * Default: None.
     */
    HELM_RELEASE_NAME = "helm_release_name",
    /**
     * Boolean value indicating if the runners were installed (installed=true), or already present (installed=false).
     * Required: false
     * Default: None.
     */
    INSTALLED = "installed",
    /**
     * JSON-parseable array of the runner names, whether they were installed or not.
     * Required: false
     * Default: None.
     */
    RUNNERS = "runners",
}
