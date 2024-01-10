/**
 * BigQuery-specific warehouse options.
 */
export interface IBigQueryOptions {
  /**
   * The key with which to partition the table. Typically the name of a timestamp or date column.
   *
   * For more information, read the [BigQuery partitioned tables docs](https://cloud.google.com/bigquery/docs/partitioned-tables).
   */
  partitionBy?: string;

  /**
   * The keys by which to cluster partitions by.
   *
   * For more information, read the [BigQuery clustered tables docs](https://cloud.google.com/bigquery/docs/clustered-tables).
   */
  clusterBy?: string[];

  /**
   * SQL based filter for when incremental updates are applied.
   *
   * For more information, see our [incremental dataset docs](https://docs.dataform.co/guides/incremental-datasets).
   */
  updatePartitionFilter?: string;

  /**
   * Key-value pairs for [BigQuery labels](https://cloud.google.com/bigquery/docs/labels-intro).
   *
   * If the label name contains special characters, e.g. hyphens, then quote its name, e.g. labels: { "label-name": "value" }.
   */
  labels?: { [name: string]: string };

  /**
   * This setting specifies how long BigQuery keeps the data in each partition. The setting applies to all partitions in the table,
   * but is calculated independently for each partition based on the partition time.
   *
   * For more information, see our [docs](https://cloud.google.com/bigquery/docs/managing-partitioned-tables#partition-expiration).
   */
  partitionExpirationDays?: number;

  /**
   * When you create a partitioned table, you can require that all queries on the table must include a predicate filter (
   * a WHERE clause) that filters on the partitioning column.
   * This setting can improve performance and reduce costs,
   * because BigQuery can use the filter to prune partitions that don't match the predicate.
   *
   * For more information, see our [docs](https://cloud.google.com/bigquery/docs/managing-partitioned-tables#require-filter).
   */
  requirePartitionFilter?: boolean;

  /**
   * Key-value pairs for options [table](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#table_option_list), [view](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#view_option_list), [materialized view](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#materialized_view_option_list).
   *
   * Some options (e.g. `partitionExpirationDays`) have dedicated type/validity checked fields; prefer using those.
   * String values need double-quotes, e.g. additionalOptions: {numeric_option: "5", string_option: '"string-value"'}
   * If the option name contains special characters, e.g. hyphens, then quote its name, e.g. additionalOptions: { "option-name": "value" }.
   */
  additionalOptions?: { [name: string]: string };
}
